import { createFeatureSelector } from "@ngrx/store";
import { Notification } from "../models/notification.model";

export const selectNotifications = createFeatureSelector<ReadonlyArray<Notification>>("notifications")
