import { CarProps } from '@/Types';
import React from 'react'

interface CarDetailsProps {
  isOpen: boolean;
  // closeModal: () => void;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  car: CarProps;
}

const CarDetails = ({isOpen, closeModal, car} : CarDetailsProps) => {
  return (
    <div>CarDetails</div>
  )
}

export default CarDetails