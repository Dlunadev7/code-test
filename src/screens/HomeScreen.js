import React from 'react'
import { Form } from '../components/form/Form';
import { Table } from '../components/table/Table';

import '../styles/homeScreen.css';

export const HomeScreen = () => {
  return (
    <main className="main__content">
      <div className="main__content__container">
        <span className="main__title__container">
          <h1 className="main__title">Nueva tabla</h1>
        </span>
        <Form />
        <Table name="Name" constraints="Constraints" description="Description" type="Type" />
        <Table name="Table" constraints="Constraints" description="Description" type="Type" />
      </div>
    </main>
  )
}
