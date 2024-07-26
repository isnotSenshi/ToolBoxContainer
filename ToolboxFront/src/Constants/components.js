import { COLORS } from "./colors"

export const $text = {
     h1: {
          $styleString: `    
               font-size: 4vw;
               font-weight: bold;
               margin-bottom: 5vw;
          `
     }
}

export const MAIN = {
     mainBox: {
          $styleString: `   
               display: flex;
               justify-content: center;
               align-items: center;   
	          overflow: hidden;            
          `
     },
     mainLayout: {
          $styleString: `       
               margin-top: 2.5vw;       
               background-color: ${COLORS.MARBEL}75;
               padding: 2.5vw;
               width: 70vw;
               height: 40vw;
               border-radius: 1.5vw;
               color: ${COLORS.WHITE};
               display: flex;   
               grid-gap: 2.5vw;    
          `
     },
     titleFiles: {
          $text: `All Files`,
          $styleString: `     
               display: flex;
               justify-content: center;
               align-items: center;
               font-size: 2.5vw;  
     `
     },
     inputFiles: {
          autoComplete: `off`,
          placeholder: `Search file by name`,
          $text: `All Files`,
          $styleString: `     
               border-radius: .5vw;
               padding: .5vw;
               margin: 1.5vw;
               font-size: 1.5vw; `
     },
     mainIcon: {
          width: `5vw`,
          $styleString: `
               background-color: ${COLORS.MARBEL}; 
               box-shadow: .2vw .5vw .5vw .2vw ${COLORS.GREY};
               border-radius: 1vw;
               cursor: pointer;
          `
     },
     tableBox: {
          $styleString: `
               background-color: ${COLORS.BLACK}; 
               display: flex;
               justify-content: center;
               align-items: center;
               padding: 1.5vw;
               height: 37.5vw;
               width: 70vw;
               border-radius: 1vw;
               overflow: hidden;
          `
     },
     mainListData: (pos) => {
          if (pos === 0)
               return {
                    $styleString: `    
                         display: flex; 
                         font-size: 1.5vw;
                         font-weight: bold;
                         justify-content: space-around;
                         padding: 1vw;
                         border-radius: 1vw;
                         margin-top: 1vw;
                         margin-bottom: 2vw;
                         color: white;
                         background-color: ${COLORS.BLACK}; 
                         cursor: pointer;
                    `}
          return {
               $styleString: `    
                         display: flex;
                         font-size: 1.5vw;
                         font-weight: bold;
                         justify-content: space-around;
                         padding: 1vw;
                         border-radius: 1vw;
                         margin-top: 1vw;
                         color: ${COLORS.BLACK}; 
                         background-color: ${pos % 2 === 0 ? COLORS.PINKISH_RED_2 : COLORS.PINKISH_RED};
                         cursor: pointer;
                         &:hover {                         
                              background-color: ${COLORS.RED_BLACK}; 
                         }
               `}
     },
     mainTable: {
          $styleString: `    
          display: block;
          width: 32.5vw;    
          height: 30vw;    
          font-size: 3vw;          
          overflow-y: auto;  
          overflow-x: hidden; 
          padding-right: 1vw;
     `
     },
}

export const FILE_DATA = {
     mainBox: {
          $styleString: `   
               background-color: ${COLORS.BLACK};
          `
     },
     mainTable: {
          $styleString: `   
               width: -webkit-fill-available;

     `
     },
     tableBox: {
          $styleString: `
               background-color: ${COLORS.BLACK}; 
               display: flex;
               padding: 1.5vw;
               height: 37.5vw;
               overflow-y: auto;
               width: 70vw;
               border-radius: 1vw;
          `
     },
     rowItems: [
          {
               $text: "File Name",
               $styleString: `    
               `
          },
          {
               $text: "Text",
               $styleString: `    
               `
          },
          {
               $text: "Number",
               $styleString: `    
               `
          },
          {
               $text: "Hex",
               $styleString: `    
               `
          },
     ],
     mainTableList: {
          $styleString: `    
               color: black;
               font-size: .75vw;
               display: block; 
               row-gap: 1vw;
               padding: .5vw;
               display: grid;
     `},
     gridTable: (pos) => {
          if (pos % 2 === 0)
               return {
                    $styleString: `
                         display: flex;
                         justify-content: space-between; 
                         background-color: ${COLORS.PINKISH_RED}; 
                         padding: 1vw;
                         border-radius: .5vw;
                     `
               }
          else
               return {
                    $styleString: `
                         display: flex; 
                         justify-content: space-between; 
                         padding: 1vw;
                         background-color: ${COLORS.PINKISH_RED_2}; 
                         border-radius: .5vw;`
               }

     },
     dataItems: [
          {
               $styleString: `display: flex; 
               justify-content: center; 
               align-items: center; 
               width: -webkit-fill-available; 
               max-width: 5vw;    
               white-space: nowrap;
               overflow: hidden;
               text-overflow: ellipsis;            
          `},
          {
               $styleString: `display: flex; 
               justify-content: center; 
               align-items: center; 
               width: -webkit-fill-available; 
               max-width: 15vw;    
               white-space: nowrap;
               overflow: hidden;
               text-overflow: ellipsis;  
          `},
          {
               $styleString: `display: flex; 
               justify-content: center; 
               align-items: center; 
               width: -webkit-fill-available; 
               max-width: 15vw;    
               white-space: nowrap;
               overflow: hidden;
               text-overflow: ellipsis;
          `},
          {
               $styleString: `display: flex; 
               justify-content: center; 
               align-items: center; 
               width: -webkit-fill-available; 
               white-space: nowrap;
               max-width: 20vw;
               overflow: hidden;
               text-overflow: ellipsis;
          `}
     ]
}