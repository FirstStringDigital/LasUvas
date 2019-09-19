// Displays a confirmation prompt when the service worker finds an update askng the user to update the page to display the latest version. 

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    'The Las Uvas application has been updated.' + 'Would you like to reload to display latest info.'
  )
  if (answer === true) {
    window.location.reload()
  }
}