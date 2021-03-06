import Contract from '../models/Contract';
import Student from '../models/Student';
import Company from '../models/Company';

class ScanController {
  async index(req, res) {
    const { token } = req.query;

    const contracts = await Contract.findAll({
      order: ['createdAt'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name', 'cpf'],
        },
        {
          model: Company,
          as: 'company',
          attributes: ['name', 'cnpj'],
        },
      ],
    });

    const contract = contracts.find((c) => c.token == token);
    // console.log(contract);

    return res.json(contract);
  }
}

export default new ScanController();
