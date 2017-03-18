<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ApiController extends Controller
{
    public function index()
    {
      return response()->json(['key' => 'value']);
    }

    public function store()
    {
      return response()->json(['key' => 'value']);
    }
}
