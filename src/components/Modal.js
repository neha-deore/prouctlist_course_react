import React,{useState,useEffect,useRef} from 'react'
import {Modal,Button,Form}from 'react-bootstrap'
import axios from 'axios'

const RegForEmail = RegExp('^[a-zA-Z0-9._-]+@[A-zA-Z0-9.-]+.com$');
const RegForName = RegExp('^[a-zA-Z]+\\s[a-zA-Z]+$');
const RegForQuery=RegExp('^[a-zA-Z0-9 ]{10,100}$')


 export function MyVerticalCenteredModal(props) {
     const nameRef = useRef(null)
     const emailRef = useRef(null)
     const queryRef = useRef(null)
     //storing values
     const [name,setName]=useState('')
     const [email,setEmail]=useState('')
     const [query,setQuery]=useState('')
     //storing error
     const [ename,setEname]=useState('')
     const [eemail,setEemail]=useState('')
     const [equery,setEquery]=useState('')

     const handler=e=>{
       let input=e.target.name
       switch(input){
         case 'name':
           setEname(RegForName.test(nameRef.current.value)?'':'Please enter full name')
           setName(nameRef.current.value)
           break

           case 'email':
           setEemail(RegForEmail.test(emailRef.current.value)?'':'email is invalid')
           setEmail(emailRef.current.value)
           break

           case 'query':
           setEquery(RegForQuery.test(queryRef.current.value)?'':'Please enter atleast 10 characters')
           setQuery(queryRef.current.value)
           break
           default:
       }
     }

     const onSubmit=()=>{
       if(ename==='' && eemail==='' && equery===''){
         if(name!=='' && email!=='' && query!==''){
           const formData={"course":props.course,"name":nameRef.current.value,"email":emailRef.current.value,"query":queryRef.current.value}
           setName('')
           setEmail('')
           setQuery('')
           setEname('')
           setEemail('')
           setEquery('')
           axios.post('http://localhost:3001/enquiry',formData)
         {props.onHide()}
         }else{alert("Enquiry submission Failed!Input Fields Empty")}
       }else{alert("Enquiry submission Failed! Validation error")}
        
         
     }

    return (
       <Modal
       {...props}
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered
       >
           <Modal.Header closeButton>
               <Modal.Title id="contained-modal-title-vcenter">
                   Enquiry
               </Modal.Title>
           </Modal.Header>
           <Modal.Body>
               <Form>
               <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Course Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Course name" value={props.course} disabled/>
   </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name="name" placeholder="Enter Your Name" ref={nameRef} onChange={e=>handler(e)} isInvalid={ename!==''?true:false} isValid={name!==''?true:false}/>
    <Form.Control.Feedback type="invalid">{ename}</Form.Control.Feedback>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter Your Email id" ref={emailRef} onChange={e=>handler(e)} isInvalid={eemail!==''?true:false} isValid={email!==''?true:false}/>
    <Form.Control.Feedback type="invalid">{eemail}</Form.Control.Feedback>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Query</Form.Label>
    <Form.Control type="textarea" name="query" placeholder="Enter Your Query" ref={queryRef} row={4} onChange={e=>handler(e)} isInvalid={equery!==''?true:false} isValid={query!==''?true:false}/>
    <Form.Control.Feedback type="invalid">{equery}</Form.Control.Feedback>
  </Form.Group>
  
  
 </Form>
</Modal.Body>
<Modal.Footer>
<Button onClick={onSubmit} variant="info" >
    Submit
  </Button>

</Modal.Footer>
</Modal>
    )
}

// export default MyVerticalCenteredModal
