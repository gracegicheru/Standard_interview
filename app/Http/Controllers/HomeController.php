<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Student;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
      
        $student= Student::all();

        return view('student', ['students'=>$student]);
    }

    public function addStudent(Request $request){
        $validatedData= $request->validate([
            'name'=> 'required',
            'email'=>'required',
            'form'=>'required',
        ]);

        $student=new Student;
        $student->name= $validatedData['name'];
        $student->email= $validatedData['email'];
        $student->class= $validatedData['form'];

        $student->save();

        return response ()->json([
            'status'=> "ok"
        ]);


    }

    public function deleteStudent(Request $request){
        try{

            Student::find($request->delId)->delete();
            return response(['status'=> 'ok']);
        }catch(Exception $e){
            return response (['status'=> 'error']);

        }
    
    


    }

     public function editStudents(Request $request){


        $student=Student::find($request->id);
        $student->name= $request->input('name1');
        $student->email= $request->input('email1');
        $student->class= $request->input('form1');

        $student->save();
  
        return response()->json([
            'status'=>'ok'
        ]);




    }



}
