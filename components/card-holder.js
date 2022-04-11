import { useRouter } from "next/router";
import axios from "axios";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";

//import Header from '../components/header';

export default function CardHolder() {
  return (
    <div class="card-deck p-2">
      <div class="card flex-row d-flex m-1">
        <img
          class="card-img-top col-sm"
          src="https://i.stack.imgur.com/f5eeF.png"
          width="10px"
          height="150px"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class="card flex-row d-flex m-1">
        <img
          class="card-img-top col-sm"
          src="https://i.stack.imgur.com/f5eeF.png"
          width="5px"
          height="150px"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Ride ID 01</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}
