<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Nota;

class ApiController extends Controller
{
    public function index()
    {
      $notas = Nota::all();
      return response()->json(['notas' => $notas]);
    }

    public function store()
    {
      return response()->json(['key' => 'value']);
    }
}
