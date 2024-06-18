module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        new_entries: {
          has_next: Boolean,
          page: Number,
          results: Array
        },
        last_updated_data: Date,
        league: {
          id: Number,
          name: String,
          created: Date,
          closed: Boolean,
          max_entries: Number,
          league_type: String,
          scoring: String,
          admin_entry: Number,
          start_event: Number,
          code_privacy: String,
          has_cup: Boolean,
          cup_league: Number,
          rank: Number
        },
        standings: {
          has_next: Boolean,
          page: Number,
          results: [
            {
              id: Number,
              event_total: Number,
              player_name: String,
              rank: Number,
              last_rank: Number,
              rank_sort: Number,
              total: Number,
              entry: Number,
              entry_name: String
            }
          ]
        }
      },
      { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const League = mongoose.model("leagues", schema);
    return League;
  };
  