import React, { useRef } from 'react';
import { Col, Container, Row, Button, Carousel } from 'react-bootstrap';
import './BookTable.css';
const BookTable = () => {
    const nameRef=useRef();
    const descriptionRef=useRef()
    const dateRef=useRef();
    const memberRef=useRef()
const handleAddTable = e => {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;
    const price = memberRef.current.value;
    const newHotel = {name,description,date,price};
    fetch('http://localhost:7500/menu',{
        method:'POST',
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(newHotel)
    })
    .then(res=>res.json())
    .then(data=> {
        if(data.insertedId){
            alert('Added Successfully');
            e.target.reset();
        }
    })
    e.preventDefault();
}
    return (
        <div className='mt-5'>
            <h1 className='text-center fw-bold mb-5'>Book A Table</h1>
            <Container className='mb-5'>
  <Row>
    
    <Col xs={12} sm={12} md={6} lg={6}>
    <Container>
  <Row>
    <Col xs={12} sm={12} md={12} lg={12}>
        {/* <img src='https://4.bp.blogspot.com/-lnM6Szj8rI8/WWSREgSjjFI/AAAAAAAAAHI/OLneHeewSDcC3xfdW4n1yyHwNkXa9ja7ACLcBGAs/s1600/book-a-table-in-restaurant-online.jpg' className='img-fluid BookTabledate1'></img> */}

        {/* function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }; */}

  <Carousel>
  <Carousel.Item>
    <img
      className="d-block img-fluid w-100"
      src="https://4.bp.blogspot.com/-lnM6Szj8rI8/WWSREgSjjFI/AAAAAAAAAHI/OLneHeewSDcC3xfdW4n1yyHwNkXa9ja7ACLcBGAs/s1600/book-a-table-in-restaurant-online.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block img-fluid w-100"
      src="https://4.bp.blogspot.com/-lnM6Szj8rI8/WWSREgSjjFI/AAAAAAAAAHI/OLneHeewSDcC3xfdW4n1yyHwNkXa9ja7ACLcBGAs/s1600/book-a-table-in-restaurant-online.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </Col>
  </Row>
</Container>
    </Col>
    <Col xs={12} sm={12} md={6} lg={6}>
    <form onSubmit={handleAddTable} className='text-center booktable-form'>
<input className='w-75 p-2' type="text" placeholder='Add date' ref={dateRef}></input>
<br></br>
<br></br>
<input className='w-75 p-2' type="text" placeholder='Booked By' ref={nameRef}></input>
<br></br>
<br></br>
<input className='w-75 p-2' type="text" placeholder='Total Booked Table' ref={descriptionRef}></input>
<br></br>
<br></br>
<input className='w-75 p-2' type="text" placeholder='Booking Time' ref={memberRef}></input>
<br></br>
<br></br>
<button className='w-50 mb-5 bg-dark text-white pt-2 pb-2'>Book Now</button>
{/* <input className='w-50 mb-5 bg-dark text-white pt-2 pb-2' type="submit" value="Add"></input> */}
            </form>

    </Col>
  </Row>
</Container>
        </div>
    );
};

export default BookTable;