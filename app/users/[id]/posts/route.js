// GET
export const GET = async (req, res) => {
  const id = req.params.id
  try {
    
  } catch (error) {
      console.log(error);
      res.status(200).send("ID is not found: ", error);
  }

}

// PATCH
export const PATCH = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
      res.status(200).send("ID is not found: ", error);
  }
  
}

// DELETE
export const DELETE = async (req, res) => {
  try {
    
    
    
  } catch (error) {
    console.log(error);
      res.status(200).send("ID is not found: ", error);
  }
  
}

