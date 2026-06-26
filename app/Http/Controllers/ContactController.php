<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    /*halaman contact.*/
    public function index()
    {
        return Inertia::render('Contact/ContactForm');
    }

    /*submit form*/
    public function store(Request $request)
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
