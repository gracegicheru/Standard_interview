$('#submitButton').click(function(e){
	e.preventDefault();
	console.log("this")

$.ajax({

	type: 'POST',
	url: '/students',
	  headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    data:{
    	'name': $('input[id= name]').val(),
    	'email': $('input[id= email]').val(),
    	'form': $('input[id= form]').val(),
    },
    dataType:"json",

    success:function(data){
    	if (data.status=='ok'){

    		window.location.reload(true);
    	}
    }


});

});


$('.deleteStudents').click(function(){
	// console.log('this');
	let id= $(this).prop('id');
	var delId= id.substring(3, 5);
    var rowId= "#tr" + delId;
   
	$.ajax({

	type: 'POST',
	url: '/deleteStudent',
	  headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    data:{

    	delId
    },
    dataType:"json",

    success:function(data){
    	if (data.status=='ok'){
    		 $( rowId ).remove();

      }
    },
     error:function(xhr,errmsg,err){
    	console.log('error', xhr);
        console.log('status', errmsg);
        console.log('err', err);
    }


});

});

function editStudents(name,email,form,id){
    $('#name1').val(name);
    $('#email1').val(email);
    $('#form1').val(form);
    $('#id').val(id);

}
$('.EditButton').click(function(e){
    e.preventDefault();
    console.log('This');
    let id=$(this).prop('id');
    console.log(id);

    $.ajax({
        type:'POST',
        url:'/editStudent',
          headers: {
             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
         },
        data:{
            'id':$('#id').val(),
            'name1':$('input[id=name1]').val(),
            'email1':$('input[id=email1]').val(),
            'form1':$('input[id=form1]').val(),             
    },

        success:function(data){
            console.log('data', data);
                       
            if(data.status=='ok'){
                 window.location.reload(true);


            }


        },
        error:function(xhr, errmsg,err){
            console.log('error', xhr);
            console.log('status', errmsg);
            console.log('err', err);

        }

    });
});