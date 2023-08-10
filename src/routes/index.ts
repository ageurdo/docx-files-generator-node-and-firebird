import { Router } from "express";
import GenerateDocxService from '../services/GenerateDocxService';

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello, use the route to generate docs' });
});

routes.get('/generate', async (request, response) => {
    try {
        const generateDocxService = new GenerateDocxService();
        const generatedCompanies = await generateDocxService.execute();
        return response.json(generatedCompanies);
    } catch (error) {
        console.error("Error generating DOCX:", error);
        return response.status(500).json({ error: "Error generating DOCX." });
    }
});

export default routes;
