import React from 'react'
import './Expenses.css';
import {useNavigate} from 'react-router-dom';

const Expenses= () => {
  const [data, setdata] = React.useState({name: '', date: '', money: '', price: '', textarea: ''})
  const [arr, setarr] = React.useState([])
  const [id, setid]= React.useState(1);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editIndex, setEditIndex] = React.useState(null);
  const navigate=useNavigate();
 
  const handlechange = (e) => {
    // let name = e.target.name;
    // let value = e.target.value;
    const {name,value}=e.target;
    setdata({ ...data, [name]: value })
  }
  const insert = () => {
    const newData = { ...data, "id": id };
    setarr([...arr, newData]);
    setid(id + 1);
    setdata({name: '', date: '', money: '', price: '', textarea: ''});

  };
  // const deleteitem = (id) => {
    //   setarr(arr.filter(item => item.id !== id));
    const update = () => {
      const updatedArr = arr.map((item, index) =>
        index === editIndex ? { ...item, ...data } : item
      );
      setarr(updatedArr);
      setIsEditing(false);
      setEditIndex(null);
      setdata({name: '', date: '', money: '', price: '', textarea: ''});
    };


      const deleteitem = (index) => {
        const newArr = [...arr];
        newArr.splice(index, 1);
        setarr(newArr);
    
      }
      // const update = (index) => {
      //   arr.forEach((items)=>{
      //     if(items.id === index){
      //       setdata(items)
      //       }
            
      //     setdata(arr[index])
          
      //   })
      // }

      const startUpdate = (index) => {
        setdata(arr[index]);
        setIsEditing(true);
        setEditIndex(index);
      };
        // const newarr=[...arr]
        // const item = newarr[index];
        // setdata(item)
        // setid(index)
        

  const display=()=>{
  return arr.map((item, index) => (
   
    <div class="card-container" >
      <div class="card" >
    <div class="card-body">
    <img src="/images/image2.jpeg" class="card-img-top" alt="..."/>
      <h5 class="card-title">Name:{item.name}</h5>
      <p class="card-text">Date:{item.date}</p>
      <p class="card-text">Money:{item.money}</p>
      <p class="card-text">Price:{item.price}</p>
      <p class="card-text">Textarea:{item.textarea}</p>
      <button type="button"  onClick={() => deleteitem(index)}>Delete</button>
      <button type="button" onClick={()=>startUpdate(index)}>Update</button>
     
          {/* <button onClick={() => deleteitem(index)}>Delete</button> */}
          {/* <button type="button" class="btn btn-primary" onClick={()=>{
            deleteitem(index)
          }}>Delete</button> */}
          
       </div>
          </div>
          </div>
         
     ) )
    
    }

  // const handlesubmit = (e) => {
  //   e.preventDefault();
  //   insert();
  //   // display();

    
  // };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      update();
    } else {
      insert();
    }
  };

  console.log(arr)
  // console.log(data)

  // console.log(arr);
  return (
    <>
      <div className='my1'>
        <form onSubmit={handlesubmit}>
          {/* <lable>Name :</lable>
<input type="text" name="name" placeholder="Enter Name of Products
" /><br/><br/> */}
<h2>Welcome to My Expense Track Application</h2>
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">Name</label>
            </div>
            <div class="col-auto">
              <input type="text" id="name" name="name" value={data.name} class="form-control" aria-describedby="passwordHelpInline" onChange={handlechange} />
            </div>
          </div>
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">Date</label>
            </div>
            <div class="col-auto">
              <input type="date" id="date" name="date" value={data.date} class="form-control" aria-describedby="passwordHelpInline" onChange={handlechange} />
            </div>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="money" value={"Credit"} id="flexRadioDefault1" checked={data.money ==='Credit'} onChange={handlechange} />
            <label class="form-check-label" for="flexRadioDefault1">
              Credit
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="money" value={"Dabit"} id="flexRadioDefault2" checked={data.money ==='Dabit'} onChange={handlechange} />
            <label class="form-check-label" for="flexRadioDefault2">
              Dabit
            </label>
          </div>

          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">Price</label>
            </div>
            <div class="col-auto">
              <input type="number" id="num" class="form-control" name="price" value={data.price} aria-describedby="passwordHelpInline" onChange={handlechange} />
            </div>
          </div>

          <div class="mb-3">
            <label for="textarea" class="form-label" >Details</label>
            <textarea class="form-control" id="detail" rows="2" name="textarea" value={data.textarea} onChange={handlechange}></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-lg">
          {/* //   onSubmit={()=>{ */}
          {/* //     handlesubmit() */}
          {/* //   }} 
          // onClick={insert}
          // onSubmit={handlesubmit} */}
          {isEditing ? "Update" : "Submit"}
          </button><br></br>
          <button type="submit" class="btn btn-primary btn-lg" onClick={()=>{
            navigate('/')
          }}>LogOut</button>
         {/* <button onClick={()=>{
          navigate('/')
         }}>LogOut</button> */}
        </form>
      
      </div>
      {display()}
    </>
  )
}
//   setarr([...arr, data]);
// setdata({})
export default Expenses;