import {db} from './firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";


const perfilacioncompleto = document.getElementById('perfilacioncompleto');
perfilacioncompleto.addEventListener("click",async e=>{
    e.preventDefault();
})
        let muestrasproducto= [];
        let longitud;
        let dataTable;
        let dataSet=[];

        // $(document).ready(function() {   
            dataTable=$('#tabla_analisis_completo').DataTable({ 
                columnDefs:[{
                    "defaultContent":"*",
                    "targets":"_all"
                         }],       
                language: {
                        "lengthMenu": "Mostrar _MENU_ registros",
                        "zeroRecords": "Procesando",
                        "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                        "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                        "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                        "sSearch": "Buscar:",
                        "oPaginate": {
                            "sFirst": "Primero",
                            "sLast":"Último",
                            "sNext":"Siguiente",
                            "sPrevious": "Anterior"
                         },
                         "sProcessing":"Procesando...",
                    },
                //para usar los botones   
                responsive: "true",
                dom: 'Bfrtilp',       
                buttons:[ 
                    {
                        extend:    'excelHtml5',
                        text:      '<i class="fas fa-file-excel"></i> ',
                        titleAttr: 'Exportar a Excel',
                        className: 'btn btn-success'
                    },
                    {
                        extend:    'pdfHtml5',
                        text:      '<i class="fas fa-file-pdf"></i> ',
                        titleAttr: 'Exportar a PDF',
                        className: 'btn btn-danger'
                    },
                    {
                        extend:    'print',
                        text:      '<i class="fa fa-print"></i> ',
                        titleAttr: 'Imprimir',
                        className: 'btn btn-info'
                    },
                ]	        
            }); 
            dataTable.clear().draw();

        // dataTable=$("#tabla_analisis_completo").DataTable({
        //     pageLength : 10,
        //     lengthMenu :[[10,15,20,-1],[10,15,20,'Todos']],
        //     data:dataSet,
        //     columnDefs:[
        //         {
        //             targets:[0],
        //             visible:true,
        //         },
        //         {
        //             targets:-1,
        //             defaultContent:"<img src ='resources/icon_ver.png' class='icon_ver' onclick='verMuestra()'>"
        //         }
        //     ]
        // });
        
        const querySnapshot =  await getDocs(collection(db, "muestrasProductores"));
        document.getElementById("listamuestrasproducto").innerHTML = '';
        querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        // console.log("tipo analisis:" +doc.data().tipoanalisis);
            muestrasproducto.push(doc.data().tipoanalisis);
            

            if(doc.data().tipoanalisis == "4"){
                dataSet =[doc.data().tipoanalisis,
                          doc.data().nombre,
                          doc.data().apellido,
                          doc.data().codigoproductor,
                          doc.data().hora,
                          doc.data().proceso,
                          doc.data().humedad,
                          doc.data().origen,
                          doc.data().observaciones];
            // console.log("dataSet:"+dataSet);
                
                document.getElementById("listamuestrasproducto").innerHTML +=` <tr>
                <td>${doc.data().tipoanalisis}</td>
                <td>${doc.data().nombre}</td>
                <td>${doc.data().apellido}</td>
                <td>${doc.data().codigoproductor}</td>
                <td>${doc.data().fecha}</td>
                <td>${doc.data().proceso}</td>
                <td>${doc.data().humedad}</td>
                <td>${doc.data().origen}</td>
                <td>${doc.data().observaciones}</td>
                <td><img src ="resources/icon_ver.png" class="icon_ver" onclick="verMuestra()"></td>
                </tr>`
                dataTable.rows.add([dataSet]).draw();
            }
        });
        setTimeout(() => {
        longitud = muestrasproducto.length;
        console.log("longitud:"+longitud)
        }, 3000);
        /*muestrasproducto.forEach((cada ,i,muestrasproducto)=>{
            console.log("tipo: "+muestrasproducto[i]);
        })*/
    //}






