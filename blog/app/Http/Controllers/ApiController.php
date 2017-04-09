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

    public function store(Request $request)
    {

        Nota::create([
             'nota' => $request->nota
         ]);

       return response()->json(['notas' => $request->nota]);

    }

    public function lista()
    {
      return view('components.lista');
    }

    public function form()
    {
      return view('components.form');
    }

    public function nota($id)
    {
      return $id;
    }
}
