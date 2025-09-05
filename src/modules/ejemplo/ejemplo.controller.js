
export class EjemploController {

  consulta = async (req, res, next) => {
    res.status(201).json({
      status: "success", 
      user: req.session
    })
  }

}

