package com.edilberto.appconsultavendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edilberto.appconsultavendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}