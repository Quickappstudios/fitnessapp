

import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';

//Class Details Page
import { ClassDetailsPage } from './../class-details/class-details';


@IonicPage()
@Component({
  selector: 'page-classes',
  templateUrl: 'classes.html',
})
export class ClassesPage {


  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;
  
    SwipedTabsIndicator :any= null;
    tabs:any=[];
    

//array of classes dummy data for classes
   public items = [


  {
    image:'http://www.martinheydon.com/newsite/wp-content/uploads/2015/07/Athy-swimming-pool-e1438286070973.jpg',
    title:'Spin & Abs',
    time:'6.45am 9.45am',
    duration:'45 Mins',
    level:'G',
    area:'Studio',
    content:'This modern facility has a 25 metre swimming pool with move-able pool floor, sauna, steam room, 7 a side all weather football pitch, fitness studio and state of the art gym. The gym has been equipped to the highest of standards to give everybody from the beginner to the competitive athlete a complete training environment. The fitness studio holds over 50 classes per week catering for all levels of fitness. The club also provides an extensive learn to swim programme for all ages and abilities.'
   
  },
  
    {
      image:'http://www.martinheydon.com/newsite/wp-content/uploads/2015/07/Athy-swimming-pool-e1438286070973.jpg',
      title:'Aqua Aerobics',
      time:'9.30am -10.15am',
      duration:'45 Mins',
      level:'G',
      area:'Studio',
      content:'This modern facility has a 25 metre swimming pool with move-able pool floor, sauna, steam room, 7 a side all weather football pitch, fitness studio and state of the art gym. The gym has been equipped to the highest of standards to give everybody from the beginner to the competitive athlete a complete training environment. The fitness studio holds over 50 classes per week catering for all levels of fitness. The club also provides an extensive learn to swim programme for all ages and abilities.'
    },
  
   {
  title:'Body Pump',
  time:'9.45am -10.45am',
  image:'http://www.martinheydon.com/newsite/wp-content/uploads/2015/07/Athy-swimming-pool-e1438286070973.jpg',
  duration:'45 Mins',
  level:'G',
  area:'Studio'
    },

    {
      title:'HIIT 45',
      time:'5.30am 6.30am',
      image:'http://www.martinheydon.com/newsite/wp-content/uploads/2015/07/Athy-swimming-pool-e1438286070973.jpg',
      duration:'45 Mins',
      level:'G',
      area:'Studio'
        },

        {
          title:'Spinning',
          time:'6.30am 7.30am',
          image:'http://www.martinheydon.com/newsite/wp-content/uploads/2015/07/Athy-swimming-pool-e1438286070973.jpg',
          duration:'45 Mins',
          level:'G',
          area:'Studio'
            },


            {
              title:'Body Pump',
              time:'7.30am 8.30am',
              image:'http://www.martinheydon.com/newsite/wp-content/uploads/2015/07/Athy-swimming-pool-e1438286070973.jpg',
              duration:'45 Mins',
              level:'G',
              area:'Studio'
                },

                {
                  title:'Body Attack',
                  time:'8.30am 9.30am',
                  image:'http://www.martinheydon.com/newsite/wp-content/uploads/2015/07/Athy-swimming-pool-e1438286070973.jpg',
                  duration:'45 Mins',
                  level:'G',
                  area:'Studio'
                    },
]



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    ///Class Swipable Tabs of pages
    this.tabs=["24 Sun","25 Mon","26 Tue","27 Wed","28 Thur","29 Fri"];
  }



  //functions swipabletabs

  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }

  selectTab(index) {    
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
    this.SwipedTabsSlider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
      // this condition is to avoid passing to incorrect index
  	if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
  	{
  		this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
  	}
    
    }

  animateIndicator($event) {
  	if(this.SwipedTabsIndicator)
   	    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  }


//Go to Class Details page pass in the data from our object
selectedItem(item){

    this.navCtrl.push(ClassDetailsPage,{ item:item });
    console.log(this.items);

  }



  // do refresh method
  doRefresh(refresher) {
  //refresh the items array  
  this.items;

    setTimeout(() => {
      console.log('Complete');
      refresher.complete();
    }, 2000);
  }


}



 


