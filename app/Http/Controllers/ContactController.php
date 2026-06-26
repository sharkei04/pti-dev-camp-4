<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    /*halaman contact.*/
    public function index(): Response
    {
        return Inertia::render('Contact/ContactForm');
    }

    /*submit form*/
    public function store(Request $request): RedirectResponse
    {
    $validated = $request->validate([
        'first_name' => [
            'required',
            'string',
            'min:2',
            'max:50',
        ],

        'last_name' => [
            'required',
            'string',
            'min:2',
            'max:50',
        ],

        'email' => [
            'required',
            'email:rfc,dns',
            'ends_with:@student.unsri.ac.id',
        ],

        'phone' => [
            'required',
            'regex:/^[0-9+\-\s]+$/',
            'min:10',
            'max:20',
        ],

        'subject' => [
            'required',
            'string',
            'min:10',
            'max:100',
        ],

        'message' => [
            'required',
            'string',
            'min:10',
            'max:2000',
        ],
    ]);

        Contact::create($validated);

        return back()->with(
            'success',
            'Message sent successfully!'
        );
    }
}
