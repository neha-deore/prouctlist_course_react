import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Card, Container } from 'react-bootstrap'


function Products() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/ProductList').then(res=>setData(res.data))

    },[])
    return (
        <Container fluid>
            <h1 className="products-heading" style={{textAlign:"center",margin:"30px 0px",backgroundColor:"yellow"}}>Fabricon is here..</h1>
            <Card style={{margin:"40px 0px"}}>
                <Card.Img variant="top" src="Images/wallpaper.jpg"/>
                <Card.Body>
                    <Card.Text className="products-title" style={{textAlign:"center",backgroundColor:"skyblue"}}>
                    Exclusive Clothing by Fabricon!! Choose Your Festive Fav..
                    </Card.Text>
                </Card.Body>
            </Card>
            {data.map(index=>(
                <Card style={{width:'18rem',display:"inline-block",margin:"20px 40px",backgroundColor:"lightgrey"}}>
                    <Card.Img variant="top" height="350" src={index.image} />
                    <Card.Body>
                        <Card.Title className="products-name" style={{textAlign:"center",margin:"20px 0px"}}>
                            {index.pname}
                        </Card.Title>
                        <Card.Text className="products-details" >
                            <p >Quantity:{index.quantity}</p>
                            <p>Price:<font color="blue">{index.price}/-</font></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    )
}

export default Products
