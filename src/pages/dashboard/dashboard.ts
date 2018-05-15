import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';

declare var google;

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    private spinnerDialog: SpinnerDialog,
  ) {
  }

  ionViewDidLoad() {
    this.loadMap()
  }

  
  getAssetLocations() {
    let assestLocations = [
      {
        "latitude": 6.5243793,
        "longitude": 3.3792057,
        address: 'Isolo',
        date: new Date().toDateString(),
        speed: 'W[23 mph]',
        header: 'custom header '
      },
    ]
    
    for(let location of assestLocations) {
      var position = new google.maps.LatLng(location.latitude, location.longitude);
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: position
      });
      this.addMarker(
        location.latitude,
        location.longitude,
        location.header,
        location.address,
        location.date,
        location.speed
      );
    }
  }

  addMarker(lat, lng, header, address, date, speed ) {
    let latLng = new google.maps.LatLng(lat, lng);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });

    // let content = `
    // <h4  style="background: orange; color:white">${header}</h4>
    // <table>
    //   <tr>
    //     <td>
    //     </td>
    //     <td>
    //       <p>   
    //         <ion-icon ios="ios-calendar" md="md-calendar"></ion-icon> ${date}
    //       </p>
    //       <p>   
    //         <ion-icon ios="ios-calendar" md="md-calendar"></ion-icon> ${address}
    //       </p>
    //       <p>   
    //         <ion-icon ios="ios-calendar" md="md-calendar"></ion-icon> ${speed}
    //       </p>
            
    //     </td>
    //   </tr>
    // </table>
    
    // `;

    var contentString = `
      <div id="content">
        <div
          id="siteNotice"
          class="firstHeading"
          style="color: orange;text-decoration: underline;font-weight: bold"
        >
          ${header}
        </div>
        <div id="bodyContent" style="font-size: 12px;">
          <table >
            <tr>
              <td style="font-size: xx-large;
              
              padding: 5px;" >
                <i class="fas fa-street-view"></i>
              </td>
              <td style="padding: 5px;">
                <p style="margin-top: 2px; margin-bottom: 0px">   
                  <i class="far fa-calendar-alt"></i> &nbsp; 
                  <span style="color: orange"> ${date} </span>
                </p>
                <p style="margin-top: 2px; margin-bottom: 0px">   
                  <i class="fas fa-map-marker"></i> &nbsp; ${address}
                </p>
                <p style="margin-top: 2px; margin-bottom: 0px; color: green">   
                  <i class="fas fa-car"></i> &nbsp;
                  <span> ${speed} </span> 
                </p>
                  
              </td>
            </tr>
          </table>
        </div>
      </div>`;
    this.addInfoWindow(marker, contentString);

  }
  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  loadMap(){
    this.spinnerDialog.show('Welcome', 'We are loading the map', true)
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.spinnerDialog.hide();
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.getAssetLocations();
    });
  }
}
