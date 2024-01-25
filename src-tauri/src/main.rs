#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use notify_rust::Notification;
use tauri::{generate_context, Manager, SystemTray, SystemTrayEvent, Window};
use tauri_plugin_positioner::{Position, WindowExt};

#[tauri::command]
fn throw_notification(title: &str) -> () {
    Notification::new()
    .summary("Hey👋🏻! Congratulations! you fulfilled your time to focus☑ it's time to rest!")
    .appname(title)
    .icon("logo-pomo")
    .show().unwrap();
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![throw_notification])
        .setup(|app| {
            let splashscreen_window = app.get_window("splashscreen").unwrap();
            let main_window = app.get_window("main").unwrap();
            tauri::async_runtime::spawn(async move {
                // configuration to when app starts, show the splashscreen and after 5 seconds,
                // close and show the main window
                splashscreen_window
                    .move_window(Position::RightCenter)
                    .unwrap();
                std::thread::sleep(std::time::Duration::from_secs(5));
                splashscreen_window.close().unwrap();

                main_window.move_window(Position::RightCenter).unwrap();
                main_window.show().unwrap();
            });
            Ok(())
        })
        .plugin(tauri_plugin_positioner::init())
        .system_tray(SystemTray::new().with_id("Pomo"))
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::LeftClick {
                position: _,
                size: _,
                ..
            } => {
                let window: Window = app.get_window("main").unwrap();
                window.move_window(Position::RightCenter).unwrap();
                open_close_tray(window);
            }
            _ => {}
        })
        .run(generate_context!())
        .expect("erro while running tauri application")
}

fn open_close_tray(window: Window) {
    if window.is_visible().unwrap() {
        window.hide().unwrap()
    } else {
        window.show().unwrap();
        window.set_focus().unwrap();
    }
}
