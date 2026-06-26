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
            'first_name' => ['required', 'string', 'max:50'],
            'last_name'  => ['required', 'string', 'max:50'],
            'email'      => ['required', 'email'],
            'phone'      => ['required', 'string', 'max:20'],
            'subject'    => ['required', 'string', 'max:100'],
            'message'    => ['required', 'string', 'min:10', 'max:2000'],
        ]);

        Contact::create($validated);

        return back()->with(
            'success',
            'Message sent successfully!'
        );
    }
}
