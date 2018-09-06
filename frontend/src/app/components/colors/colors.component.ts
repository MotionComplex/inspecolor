import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../services/colors-api.service';
import { Color } from '../../models/color';

@Component({
    selector: 'app-colors',
    templateUrl: './colors.component.html',
    styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
    private colorService: ColorService
    public colors: Color[];
    public selectedColor: any;

    constructor(colorService: ColorService) {
        this.colorService = colorService;
    }

    ngOnInit(): void {
        this.loadColors();
    }

    private loadColors() {
        this.colorService.getColors().subscribe(colors => {
            this.colors = colors;
        }, (error) => {
            console.warn(error);
        })
    }
}
