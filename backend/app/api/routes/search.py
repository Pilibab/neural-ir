# search.py: The endpoint where the user sends a synopsis.
from flask import request, jsonify
from pydantic import ValidationError

from schemas.search_schema import searchReqSchema
from app.main import app
from services.search_service import search_manhwa
from services.manhwa_service import ManhwaService
from db.mongo import manhwa_data_collection



@app.route("/api/search", method=['POST'])
def search():
    data = request.get_json()

    # check if request is valid 
    try:
        valid_data = searchReqSchema(**data)

    except ValidationError as e:
        return jsonify({"error": "Invalid input", "details": e.errors()}), 400
    
    # proceed with search service 
    results = search_manhwa(valid_data.synopis)

    service = ManhwaService()

    # find all manhwa that has the id 
    results = service.find_all_that(results) 

    return jsonify({
        "status": "success",
        "count": len(results),
        "data": results  # This is your array of Manhwas
    }), 200