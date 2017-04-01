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
      return $request->firstName;
      /*
      Nota::create([
             'user_id' => $user->id,
             'sucursal_id' =>$request['sucursal_id'],
             'cedula' => $request['cedula'],
             'nombre' => $request['nombre'],
             'apellido' => $request['apellido'],
             'telefono' => $request['telefono'],
             'direccion' => $request['direccion'],
         ]);
         */
    }
}
