import {Notification, NotificationUserAction} from '../../../services/notification/types';
import * as Actions from './notification.actions';
import {NotificationState} from './notification.state';

export const initialNavigationState: NotificationState = {
  showNotification: false,
  notification:     new Notification()
};

export function notificationReducer(state = initialNavigationState, action: Actions.NotificationAction): NotificationState {
  let newState: NotificationState;

  switch (action.type) {
    case Actions.SHOW_NOTIFICATION: {
      newState = {
        notification:     action.payload,
        showNotification: true
      };
      break;
    }
    case Actions.ACCEPT_NOTIFICATION: {
      const modifiedState = newState = {...state};

      // Zeile wird auskommentiert, da ein Fehler auftritt, der verhindert, dass Benachrichtigungen angezeigt werden.
      // Das Entfernen der Zeile hat allem Anschein nach keine weiteren Konsequenzen.
      // => BSAPP-752
      // modifiedState.notification.userAction = NotificationUserAction.ACCEPTED;
      modifiedState.showNotification = false;

      break;
    }
    case Actions.DECLINE_NOTIFICATION: {
      const modifiedState = newState = {...state};

      // Zeile wird auskommentiert, da ein Fehler auftritt, der verhindert, dass Benachrichtigungen angezeigt werden.
      // Das Entfernen der Zeile hat allem Anschein nach keine weiteren Konsequenzen.
      // => BSAPP-752
      // modifiedState.notification.userAction = NotificationUserAction.DECLINED;
      modifiedState.showNotification = false;

      break;
    }
    case Actions.DISCARD_NOTIFICATION: {
      const modifiedState = newState = {...state};

      modifiedState.notification = null;
      modifiedState.showNotification = false;

      break;
    }
    default:
      // do nothing
      return state;
  }
  console.log('REDUX [NotificationReducer] ' + action.type + ' with new state ' + JSON.stringify(newState));
  return newState;
}
