// Time Funtion
const convertSeconds = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
  
    if (hours > 0) {
      return `${hours} hours : ${minutes} minutes`
    }
  }
  