import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Spinner, Alert } from 'react-bootstrap';
import { FaAngleRight } from 'react-icons/fa';
import useFetch from '../components/hooks/useFetch';
import ItemCard from '../components/ItemCard';

export default function CollectionPage() {
  const { name } = useParams();
  const { items, isPending, error } = useFetch('https://lumos-backend-4pcd.onrender.com/items');
  const collectionTitles = {
    "bubble-gum-btch": "Bubble Gum B*tch",
    "arabian-nights": "Arabian Nights",
    "classique": "Classique",
    "cozy-mozy": "Cozy Mozy",
    "gold-standard": "Gold Standard",
    "minimalism-era": "Minimalism Era"
  };

  const filteredItems = items?.filter(item => item.collection === name) || [];

  return (
  <section className="py-3 bg-light text-body">
    <Container>

      <p className="text-muted mb-5">
        <Link to="/" className="text-body-secondary">Start Page</Link> <FaAngleRight/> {collectionTitles[name] || name}
      </p>

      <h2 className="fw-semibold mb-4">Collection: {collectionTitles[name] || name}</h2>

      { isPending && (
        <div className="text-center py-5">
          <Spinner animation="border" variant="dark" />
        </div>
      ) }

      { error && (
        <Alert variant="danger" className="text-center">{error}</Alert>
      ) }

      { !isPending && !error && filteredItems.length === 0 && (
        <Alert variant="info" className="text-center">No items found in this collection.</Alert>
      ) }

      { !isPending && !error && filteredItems.length > 0 && (
        <ItemCard items={filteredItems} />
      ) }
    </Container>
  </section>
    
  );
}