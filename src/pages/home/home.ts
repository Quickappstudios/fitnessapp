import { ClassesPage } from './../classes/classes';
// import { NetworkServiceProvider } from './../../providers/network-service/network-service';
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
  

export class HomePage {


  /*Features array*/
  features:any[] = [
    {
      title:'Health-tips',
      image:'http://www.beyondfashionmagazine.com/wp-content/uploads/2017/04/6a670ac1508f442cac494d76770e1ded.jpg_srz_953_682_85_22_0.50_1.20_0.00_jpg_srz.jpeg',
      
    },

    {
      title:'Classes',
      image:'http://www.beyondfashionmagazine.com/wp-content/uploads/2017/04/6a670ac1508f442cac494d76770e1ded.jpg_srz_953_682_85_22_0.50_1.20_0.00_jpg_srz.jpeg',
      
    },

    {
      title:'Videos',
      image:'http://www.beyondfashionmagazine.com/wp-content/uploads/2017/04/6a670ac1508f442cac494d76770e1ded.jpg_srz_953_682_85_22_0.50_1.20_0.00_jpg_srz.jpeg',
      
    },

    {
      title:'Gym Equipment',
      image:'http://www.beyondfashionmagazine.com/wp-content/uploads/2017/04/6a670ac1508f442cac494d76770e1ded.jpg_srz_953_682_85_22_0.50_1.20_0.00_jpg_srz.jpeg',
      
    },


    {
      title:'Staff',
      image:'http://www.beyondfashionmagazine.com/wp-content/uploads/2017/04/6a670ac1508f442cac494d76770e1ded.jpg_srz_953_682_85_22_0.50_1.20_0.00_jpg_srz.jpeg',
      
    },

    {
      title:'Gallery',
      image:'http://www.beyondfashionmagazine.com/wp-content/uploads/2017/04/6a670ac1508f442cac494d76770e1ded.jpg_srz_953_682_85_22_0.50_1.20_0.00_jpg_srz.jpeg',
      
    },

    {
      title:' Special Gym Offers',
      image:'http://www.beyondfashionmagazine.com/wp-content/uploads/2017/04/6a670ac1508f442cac494d76770e1ded.jpg_srz_953_682_85_22_0.50_1.20_0.00_jpg_srz.jpeg',
      
  },

  {
    title:'Book A Class',
    image:'http://www.beyondfashionmagazine.com/wp-content/uploads/2017/04/6a670ac1508f442cac494d76770e1ded.jpg_srz_953_682_85_22_0.50_1.20_0.00_jpg_srz.jpeg',
    
},




  ]

  constructor(public navctrl: NavController) {
   
  //check to see if the connection is true


  }


  //Push to Pages Dynamically
  goPage(){

this.navctrl.push(ClassesPage);


  }



   }


  
  


    
   

    


  



    



  


