router.get('/api/services', async (req, res) => {
    try {
        const services = await service.findAll();
        res.json(services);
    } catch (error) {
        res.status(500).json({error});
    }
}
);

router.get('/api/services/:id', async (req, res) => {
    try {
        const serviceData = await service.findByPk(req.params.id);
        res.json(serviceData);
    } catch (error) {
        res.status(500).json({error})
    }
}
);

router.post('/api/services', async (req, res) => {
    try {
        const createdService = await service.create(
            {
                service_name: req.body.service_name,
                description: req.body.description  
            }
        );
        res.json(createdService);
    }
    catch (error) {
        res.status(500).json({error})
    }
}
);

router.put('/api/services/:id', async (req, res) => {
    try {
        await service.update(
        {
            service_name: req.body.service_name,
            description: req.body.description
        },
        {
            where: {
                id: req.params.id
            }
        }
    );
    const updatedService = await service.findByPk(req.params.id);
        res.json(updatedService);
    } catch (error) {
        res.status(500).json({ error });
    }
}
);

router.delete('/api/services/:id', async (req, res) => {
try {
    await service.destroy(
        {
            where:{
                id: req.params.id
            }
        }
    );
    res.json(
        {
            sucess: true
        }
    );
    } catch(error) {
        res.status(500).json({error});
    }
}
);