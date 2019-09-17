import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {GameService} from "../common/service/game.service";

@Injectable({
  providedIn: 'root'
})
export class RoundResultGuard implements CanActivate {
  constructor(public gameService: GameService, public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.gameService.game && this.gameService.game.currentTeam) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
