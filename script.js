// For Bangla Name input
let nameBn=document.getElementById("name");
let btn=document.querySelector('.btn-block');
nameBn.addEventListener("keyup",()=>{
  let letter=['a','i','e','o','u'];
  let st=nameBn.value.split('');
 let flag=0;
 for(i in letter)
 {
     for(j in st)
     {
         if(letter[i]==st[j])
         {
             
             
             flag=1;

             break;
         }
     }
     if(flag==1)
     {
        alert("please write in Bangla");
         break;
     }
 }
})
alert=(msg)=>{
    let span=document.createElement('span');
             span.classList='text-danger alert ';
             span.appendChild(document.createTextNode(msg));
             let root=document.querySelector('#namefield');
             console.log(root);
             let before=document.querySelector('.warning');
             console.log(before);
             root.insertBefore(span,before);
             
             setTimeout(()=>{
                document.querySelector('.alert').remove();
             },500)
}

//This part for occupation 
var occupation=document.getElementById("occupation");
var otherOccupation=document.getElementById("others_occupation");
let other_o=document.getElementById("other_o");
occupation.addEventListener("change",function (){
if (this.value==6){
  other_o.classList.add('active');
}
else{
    other_o.classList.remove('active');   
}
});


//For division and district

let dhaka=['Null','Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Kishoreganj', 'Madaripur', 'Manikganj', 'Munsiganj', 'Narayanganj', 'Narsingdi', 'Rajbari', 'Shariatpur', 'Tangail'];
let barisal=['Null','Barisal','Bhola','Barguna','JhaloKathi','Patuakhali','Pirojpur'];
let khulna=['Null','Bagherhat', 'Chuadanga', 'Jessore', 'Jhenaidah', 'Khulna', 'Kushtia', 'Magura', 'Meherpur', 'Narail', 'Sathkhira'];
let chattagram=['Null','Bandarban', 'Brahmanbaria', 'Chandpur', 'Chattagram', 'Comilla', "Cox's Bazar", 'Feni', 'Khagrachari', 'Lakshmipur', 'Noakhali', 'Rangamati'];
let rajshahi=['Null','Bogra', 'Joypurhat', 'Naogaon', 'Natore', 'Nawabganj', 'Pabna', 'Rajshahi'];
let rangpur=['Null','Dinajpur', 'Gaibandha', 'Kurigram', 'Lalmonirhat', 'Nilphamari', 'Panchagarh', 'Rangpur', 'Thakurgaon'];
let mymensingh=['Null','Jamalpur', 'Mymensingh', 'Netrokona', 'Sherpur'];
let sylhet=['Null','Habiganj', 'Moulvibazar', 'Sunamganj', 'Sylhet'];
let dhakaBn=['জেলা নির্বাচন','ঢাকা','ফরিদপুর','গাজীপুর','গোপালগঞ্জ','কিশোরগঞ্জ','মাদারীপুর','মানিকগঞ্জ','মুন্সিগঞ্জ','নারায়নগঞ্জ','নরসিংদী', 'রাজবাড়ী', 'শরীয়তপুর','টাঙ্গাইল'];
let barisalbn=['জেলা নির্বাচন','বরিশাল','ভোলা','বরগুনা','ঝালকাঠি','পটুয়াখালী','পিরোজপুর'];
let khulnabn=['জেলা নির্বাচন','বাগেরহাট','চুয়াডাঙ্গা','যশোর','ঝিনাইদাহ','খুলনা','কুষ্টিয়া','মাগুরা','মেহেরপুর','নড়াইল','সাতক্ষীরা'];
let chattagrambn=['জেলা নির্বাচন','বান্দারবন','ব্রাহ্মণবাড়িয়া','চাঁদপুর','চট্টগ্রাম','কুমিল্লা','কক্সবাজার','ফেনী','খাগড়াছড়ি','লক্ষীপুর','নোয়াখালী','রাংগামাটি'];
let rajshahibn=['জেলা নির্বাচন','বগুড়া','জয়পুরহাট','নওগা','নাটোর','নবাবগঞ্জ','পাবনা','রাজশাহী'];
let rangpurbn=['জেলা নির্বাচন','দিনাজপুর','গাইবান্দা','কুড়িগ্রাম','লালমনিরহাট','নিলফামারি','পঞ্চঘর','রংপুর','ঠাকুরগাও'];
let mymensinghbn=['জেলা নির্বাচন','জামালপুর','ময়মনসিংহ','নেত্রকোনা','শেরপুর'];
let sylhetbn=['জেলা নির্বাচন','হবিগঞ্জ','মৌলভীবাজার','সুনামগঞ্জ','সিলেট'];
let division=document.getElementById("division");
division.addEventListener("change",e);
function e(){
    console.log(this.value);
    if(this.value==1)
    {
        let district=document.getElementById("district");
        district.innerHTML=" ";
        district.classList.add('active');
       for(let i=0;i<dhakaBn.length;i++)
       {
           let newEle=document.createElement("option");
           newEle.value=`${dhaka[i]}`;
           newEle.innerText=`${dhakaBn[i]}`;
           district.appendChild(newEle);    
       }
    }
    else if(this.value==2)
    {
        let district=document.getElementById("district");
        district.innerHTML=" ";
        district.classList.add('active');
       for(let i=0;i<khulnabn.length;i++)
       {
           let newEle=document.createElement("option");
           newEle.value=`${khulna[i]}`;
           newEle.innerText=`${khulnabn[i]}`;
           district.appendChild(newEle);    
       }
    }
    else if(this.value==3){
        let district=document.getElementById("district");
        district.innerHTML=" ";
        district.classList.add('active');
       for(let i=0;i<rajshahibn.length;i++)
       {
           let newEle=document.createElement("option");
           newEle.value=`${rajshahi[i]}`;
           newEle.innerText=`${rajshahibn[i]}`;
           district.appendChild(newEle);    
       }
    }
   else if(this.value==4)
    {

        let district=document.getElementById("district");
        district.innerHTML=" ";
        district.classList.add('active');
       for(let i=0;i<barisalbn.length;i++)
       {
           let newEle=document.createElement("option");
           newEle.value=`${barisal[i]}`;
           newEle.innerText=`${barisalbn[i]}`;
           district.appendChild(newEle);    
       }
    }
    else if(this.value==5){
        let district=document.getElementById("district");
        district.innerHTML=" ";
        district.classList.add('active');
       for(let i=0;i<rangpurbn.length;i++)
       {
           let newEle=document.createElement("option");
           newEle.value=`${rangpur[i]}`;
           newEle.innerText=`${rangpurbn[i]}`;
           district.appendChild(newEle);    
       }
    }
    else if(this.value==6){
        let district=document.getElementById("district");
        district.innerHTML=" ";
        district.classList.add('active');
       for(let i=0;i<mymensinghbn.length;i++)
       {
           let newEle=document.createElement("option");
           newEle.value=`${mymensingh[i]}`;
           newEle.innerText=`${mymensinghbn[i]}`;
           district.appendChild(newEle);    
       }
    }
    else if(this.value==7){
        let district=document.getElementById("district");
        district.innerHTML=" ";
        district.classList.add('active');
       for(let i=0;i<sylhetbn.length;i++)
       {
           let newEle=document.createElement("option");
           newEle.value=`${sylhet[i]}`;
           newEle.innerText=`${sylhetbn[i]}`;
           district.appendChild(newEle);    
       }
    }
    else if(this.value==8){
        let district=document.getElementById("district");
        district.innerHTML=" ";
        district.classList.add('active');
       for(let i=0;i<chattagrambn.length;i++)
       {
           let newEle=document.createElement("option");
           newEle.value=`${chattagram[i]}`;
           newEle.innerText=`${chattagrambn[i]}`;
           district.appendChild(newEle);    
       }
    }
    else{
        let district=document.getElementById("district");
        district.classList.remove('active');
    }
}

//For Maritial part DOM
let numChildren=document.querySelector('.childrens');
let marriedStatus=document.getElementById('married');
let unMarried=document.getElementById('unmarried');
marriedStatus.addEventListener("click",()=>{
    numChildren.classList.add('active');
});
unMarried.addEventListener("click",()=>{
    numChildren.classList.remove('active');
})
