import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InvestimentosDTO } from './investimentosDTO';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private _httpClient:HttpClient) { }

  getAllItem(){
    return this._httpClient.get<InvestimentosDTO[]>("http://localhost:3000/items");
  }

  create(data:InvestimentosDTO){
    return this._httpClient.post("http://localhost:3000/items", data);
  }

  getById(id:Number){
    return this._httpClient.get<InvestimentosDTO>(`http://localhost:3000/items/${id}`);
  }

  update(data:InvestimentosDTO){
    return this._httpClient.put<InvestimentosDTO>(`http://localhost:3000/items/${data.id}`, data);
  }

  delete(id:Number){
    return this._httpClient.delete<InvestimentosDTO>(`http://localhost:3000/items/${id}`);
  }
}
