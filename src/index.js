import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from './components/App.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'popper.js';

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);

const $enquiryForm = $('#enquiry-form');
const $formSuccess = $('#form-success');
const $formErrors = $('#form-errors');
const $confirmEmail = $('#confirm-email');
const $submitButton = $("button[type='submit']");

$enquiryForm.submit(function (event) {

	// Stop form from submitting normally
	event.preventDefault();

	startProgress();

	const email = $enquiryForm.find("input[name='email']").val();

	$enquiryForm.toggleClass('d-none', false);
	$formSuccess.toggleClass('d-none', true);
	$formErrors.toggleClass('d-none', true);
	$formErrors.find('ul').empty();

	// $.post("http://api.dorkingladiesjoggers.co.uk/enquiries/v2/club-enquiry/emails/" + email, $enquiryForm.serialize())
	$.post("http://192.168.64.4:30005/enquiries/v2/club-enquiry/emails/" + email, $enquiryForm.serialize())
		.done(function (response) {
			console.log(response);
			setSuccessState(email);
		})
		.fail(function (jqxhr, textStatus, error) {
			if (jqxhr.responseJSON === undefined) {
				console.error(textStatus);
				console.error(error);

				const list = $formErrors.find('ul');
				list.append('<li>Oops! Due to a technical issue we were unable to process your request at this time. Please try again later or contact us using the details at the top of the page while we work to resolve it.</li>');
				$formErrors.toggleClass('d-none', false);
			}
			else {
				setErrorState(jqxhr.responseJSON);
			}
		})
		.always(function () {
			stopProgress();
		});
});

function startProgress() {
	$submitButton.toggleClass('disabled', true).prop('disabled', true);
	$submitButton.find('i').removeClass('fa-send').addClass('fa-circle-o-notch fa-spin');

	$('input').toggleClass('is-invalid', false);
}

function stopProgress() {
	$("button[type='submit']").toggleClass('disabled', false).prop('disabled', false);

	$submitButton.find('i').addClass('fa-send').removeClass('fa-circle-o-notch fa-spin');
}

function setErrorState(response) {
	console.error(response);

	$enquiryForm.toggleClass('d-none', false);
	$formSuccess.toggleClass('d-none', true);
	$formErrors.toggleClass('d-none', false);

	const list = $formErrors.find('ul');

	const items = response.map(function (element) {
		return '<li>' + element.errorMessage + '</li>';
	});

	list.append(items);

	response.forEach(function (element) {
		const input = $("input[name='" + element.fieldName + "']");
		input.toggleClass('is-invalid', true);
	})
}

function setSuccessState(email) {
	$enquiryForm.toggleClass('d-none', true);
	$formSuccess.toggleClass('d-none', false);
	$confirmEmail.text(email);
}
