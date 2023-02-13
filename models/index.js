const job  = require('./job');
const service   = require('./jobLocation');
const user = require('./jobOffer');
const job = require('./location');
const profile = require('./profile');
const service = require('./service');
const serviceRange = require('./serviceRange');
const user= require('./user');


User.hasMany(jobOffer, {
  foreignKey:'user_id',
  onDelete: 'CASCADE',
});

JobOffer.hasOne(user, {
  foreignKey:'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(job, {
  foreignKey: 'service_id',
  onDelete: 'CASCADE',
});

Job.hasOne(user, {
foreignKey: 'service_id',
onDelete: 'CASCADE',
});

User.hasOne(serviceRange, {
  foreignKey: 'service_provider_id',
  onDelete: 'CASCADE',
});

ServiceRange.hasOne(User,{
  foreignKey: 'service_provider_id',
  onDelete: 'CASCADE',
});

Profile.hasOne(user,{
  foreignKey:'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(profile, {
  foreignKey:'user_id',
  onDelete: 'CASCADE',
});

location.hasOne(profile,{
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
});

Profile.hasOne(location,{
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
});

JobOffer.hasOne(Service, {
  foreignKey:'user_id',
  foreignKey:'service_id',
  onDelete: 'CASCADE',
});

Service.hasMany(jobOffer,{
  foreignKey:'service_id',
  onDelete: 'CASCADE',
});

Job.hasOne(service,{
  foreignKey: 'service_id',
  onDelete: 'CASCADE',
});

Service.hasMany(job,{
  foreignKey: 'service_id',
  onDelete: 'CASCADE',
});

Job.hasOne(job_status,{
  foreignKey: 'job_id',
  onDelete: 'CASCADE',
});

Job_status.hasMany(job,{
  foreignKey: 'job_id',
  onDelete: 'CASCADE',
});

Job_status.hasMany(job_status_name,{
  foreignKey: 'status_id',
  onDelete: 'CASCADE',
});

Job_status_name.hasOne(job_status,{
  foreignKey: 'status_id',
  onDelete: 'CASCADE',
});
// update location model
Job.hasOne(location,{
  foreignKey: '',
  onDelete: 'CASCADE',
});

//update location model
Location.hasMany(job,{
  ForeignKey: '',
  onDelete: 'CASCADE',
});

module.exports = { job, jobLocation, jobOffer, location, profile, serviceRange, user};