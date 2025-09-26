import React from 'react';
import { Button, Container, Spinner} from 'react-bootstrap';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useFetch from '../components/hooks/useFetch';
import useFilter from '../components/hooks/useFilter';
import ItemCard from '../components/ItemCard';

export default function ShopPage() {
  const {items, isPending, error} = useFetch('https://lumos-backend-4pcd.onrender.com/items');
  const {
    filteredItems,
    types,
    selectedType,
    setSelectedType
  } = useFilter(items);
  
  return (
    <section className="bg-light shop-text-body">
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
