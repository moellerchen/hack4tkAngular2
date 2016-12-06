import { Component, OnInit } from '@angular/core';
import {Response, Http} from "@angular/http";
import 'rxjs/Rx';
declare var google: any;

@Component({
  selector: 'app-traffic-jam',
  templateUrl: './traffic-jam.component.html',
  styleUrls: ['./traffic-jam.component.css']
})
export class TrafficJamComponent implements OnInit {
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  result;

  constructor(private http: Http) { }

  ngOnInit() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    function showPosition(position) {
      var directionsDisplay = new google.maps.DirectionsRenderer();
      var mapProp = {
        center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("gmap"), mapProp);

      var trafficLayer = new google.maps.TrafficLayer();
      trafficLayer.setMap(map);
    }
  }

  getDuration(origin: String, destination: String, handler) {
    var origin1 = origin;
    var destinationA = destination;

    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin1],
        destinations: [destinationA],
        travelMode: google.maps.TravelMode.DRIVING,
      }, callback);
    var duration;
    function callback(response, status) {
      duration = response.rows[0].elements[0].duration.text;
      handler(duration);
    }
  }

}
