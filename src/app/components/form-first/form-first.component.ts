import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.css'],
  providers: [ApiService]
})
export class FormFirstComponent implements OnInit {

  movies = [{}];
  selectedMovie;


  constructor(private api: ApiService) {
    this.getMovies();
    this.selectedMovie = { id: -1, title: '', description: '', year: null };
  }

  getMovies = () => {
    this.api.getAllMovies().subscribe(
      data => {
        this.movies = data;

      },
      error => {
        console.log(error);

      }
    );
  }
  /*arreglar esto tiene problemas*/
  movieClicked = (movie) => {
    this.api.getOneMovies(movie.id).subscribe(
      data => {
        this.selectedMovie = data;
      },
      error => {
        console.log(error);

      }
    );
  }

  updateMovie = () => {
    this.api.updateMovie(this.selectedMovie).subscribe(
      data =>{
        this.getMovies();
      },
      error => {
        console.log(error);
      }
    );

  }
  createMovie = () => {
    this.api.createMovie(this.selectedMovie).subscribe(
      data => {
        this.movies.push(data);
       },
      error =>{
        console.log(error);
      }
    );
  }
  deleteMovie = () =>{
    this.api.deleteMovie(this.selectedMovie.id).subscribe(
      data => {
        this.getMovies();
      },
      error =>{
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

} 
