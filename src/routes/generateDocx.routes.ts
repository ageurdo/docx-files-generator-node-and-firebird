import { Router } from "express";
import GenerateDocxService from '../services/GenerateDocxService';

const generateDocxRouter = Router();

generateDocxRouter.get('/', async (request, response) => {
    try {
        const generateDocxService = new GenerateDocxService(); // Crie uma instância do serviço
        const generatedCompanies = await generateDocxService.execute(); // Chame o método execute do serviço
        return response.json(generatedCompanies);
    } catch (error) {
        console.error("Erro ao gerar documento DOCX:", error);
        return response.status(500).json({ error: "Erro ao gerar documento DOCX." });
    }
});

export default generateDocxRouter;
