import React from 'react';
import { Button, Container, Spinner} from 'react-bootstrap';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import useFilter from './hooks/useFilter';
import ItemCard from './ItemCard';

export default function ShopSection() {
  const {items, isPending, error} = useFetch('http://localhost:8000/items');
  const {
    filteredItems,
    types,
    selectedType,
    setSelectedType
  } = useFilter(items);
  
  return (
    <section className="py-3 bg-light text-body">
      <Container>

        <p className="text-muted mb-5">
          <Link to="/" className="text-body-secondary">Start Page</Link> <FaAngleRight/> All Products
        </p>

        <h2 className="mb-5 fw-semibold">All products</h2>
        <div className="mb-4 d-flex flex-wrap gap-2">
          {types.map(type => (
            <Button
              key={type}
              variant={selectedType === type ? 'dark' : 'outline-dark'}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </Button>
          ))}
        </div>

        { error && <div className="mb-5">{ error }</div>}
        { isPending && (
          <div className="text-center py-5">
            <Spinner animation="border" variant="dark" />
          </div>
        ) }

        <ItemCard items = {filteredItems}/>
        
      </Container>
    </section>
  )
}
