import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hardstyle';

  hardstyles = [
    {
      name: 'MGFY',
      singer: 'Ran D',
      affiche: 'https://i.ytimg.com/vi/ZMierZ8tBu4/hqdefault.jpg',
      genre: 'hardstyle'
    },
    {
      name: 'Take me away',
      singer: 'Da Tweekaz',
      affiche: 'https://img.discogs.com/6q1JZZK7DEKbnGg2NShBHXq_-Tg=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14305987-1571869719-5893.jpeg.jpg',
      genre: 'hardstyle'
    },
    {
      name: 'Not an addict',
      singer: 'Ran D',
      affiche: 'https://img.discogs.com/sQQFmryvV9_I30izZnIGs1BOpCY=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14344380-1572633072-1605.jpeg.jpg',
      genre: 'hardstyle'
    },
    {
      name: 'Wildfire',
      singer: 'Adaro',
      affiche: 'https://img.discogs.com/u0GCaWhzoY4hEvuBE69gxNrg0-k=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-15668913-1595590093-7655.jpeg.jpg',
      genre: 're-style'
    },
    {
      name: 'Run from reality',
      singer: 'Ran D',
      affiche: 'https://img.discogs.com/E6gL2Xs_-mQg568reuuMO2o6_0g=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14280663-1571353211-8644.jpeg.jpg',
      genre: 'hardstyle'
    },

    {
      name: 'The Phoenix Of The Night',
      singer: 'Adaro',
      affiche: 'https://img.discogs.com/6cTKwaOqZBpjwarufiDfX7pUUk0=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14996309-1585266594-9963.jpeg.jpg',
      genre: 're-style'

    },
    {
      name: 'jagermeister',
      singer: 'Da Tweekaz',
      affiche: 'https://i1.sndcdn.com/artworks-000386007270-yd1g8l-t500x500.jpg',
      genre: 'hardstyle'
    }
  ];
}
