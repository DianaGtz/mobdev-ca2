import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'app-episodes',
    templateUrl: './episodes.page.html',
    styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {


    episodes: Observable<any>;
 characterId: Observable<any>
  results: Observable<any>;
  searchTerm: string = '';

  //@ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  constructor(private router: Router, 
        private api: ApiService, private http: HttpClient) { }

    ngOnInit() {
       
      this.episodes = this.api.getEpisodes();
       //this.episodes.subscribe(data => {console.log('my data' , data);
    //});
    }


    //read the data from the mouse and go to the episode clicked
    openDetails(episode){
         let episodeId = episode.episode_id;
    this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
    }
    
   


}
      
      