import InAppBrowser from "react-native-inappbrowser-reborn";

export function openUrl(url?: string | null, title?: string | null): void {
  if (!url) {
    return;
  }

  InAppBrowser.openAuth(url, title ?? url, {
    ephemeralWebSession: true,
    showTitle: true,
    enableUrlBarHiding: true,
    enableDefaultShare: true,
  });
}
