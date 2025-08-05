import { useState, useMemo } from 'react';

export default function useFilter(items) {
  const [selectedType, setSelectedType] = useState('All');

  const types = useMemo(() => {
    if (!items) return [];
    const uniqueTypes = new Set(items.map(item => item.type));
    return ['All', ...uniqueTypes];
  }, [items]); 

  const filteredItems = useMemo(() => {
    if (!items) return [];
    return selectedType === 'All'
      ? items
      : items.filter(item => item.type === selectedType);
  }, [items, selectedType]);

  return { filteredItems, types, selectedType, setSelectedType };
}

