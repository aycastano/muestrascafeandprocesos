import {db} from './firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";


const analisiscomercial = document.getElementById('analisiscomercial');
analisiscomercial.addEventListener("click",async e=>{
    e.preventDefault();
        let muestrasproducto= [];
        let longitud;
        let dataTable;
        let dataSet=[];

        dataTable=$("#tabla_analisis_comercial").DataTable({
            pageLength : 10,
            lengthMenu :[[10,15,20,-1],[10,15,20,'Todos']],
            data:dataSet,
            columnDefs:[
                {
                    targets:[0],
                    visible:true,
                },
                {
                    targets:-1,
                    defaultContent:"<img src ='resources/icon_ver.png' class='icon_ver' onclick='verMuestra()'>"
                }
            ]
        });
        
        const querySnapshot =  await getDocs(collection(db, "Muestrasproducto"));
        document.getElementById("listamuestrasproducto").innerHTML = '';
        querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        // console.log("tipo analisis:" +doc.data().tipoanalisis);
            muestrasproducto.push(doc.data().tipoanalisis);
            

            if(doc.data().tipoanalisis == "5"){
                dataSet =[doc.data().tipoanalisis,doc.data().nombre,doc.data().apellido,doc.data().codigoproductor,
                doc.data().fecha,doc.data().proceso,doc.data().humedad,doc.data().origen,doc.data().observaciones];
            // console.log("dataSet:"+dataSet);
                dataTable.rows.add([dataSet]).draw();
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
            }
        });
        setTimeout(() => {
        longitud = muestrasproducto.length;
        console.log("longitud:"+longitud)
        }, 3000);
       /* muestrasproducto.forEach((cada ,i,muestrasproducto)=>{
            console.log("tipo: "+muestrasproducto[i]);
        })*/
    //}
})





