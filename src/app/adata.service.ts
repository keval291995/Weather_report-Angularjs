import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdataService {
  id: number;
  name: string;
  temp: number;
  pressure: number;
  humidity: number;
  wind: number;
  logo: string;
  description: string;
  date: string;
  time: string;
}